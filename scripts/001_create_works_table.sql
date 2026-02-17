-- Create works table for portfolio items
CREATE TABLE IF NOT EXISTS public.works (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  images TEXT[] DEFAULT '{}',
  attachments JSONB DEFAULT '[]',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.works ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read works (public portfolio)
CREATE POLICY "Allow public read access" ON public.works
  FOR SELECT USING (true);

-- Allow authenticated users (admins) to insert
CREATE POLICY "Allow authenticated insert" ON public.works
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users (admins) to update
CREATE POLICY "Allow authenticated update" ON public.works
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users (admins) to delete
CREATE POLICY "Allow authenticated delete" ON public.works
  FOR DELETE USING (auth.role() = 'authenticated');
