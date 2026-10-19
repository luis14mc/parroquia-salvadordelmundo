ALTER TABLE catechesis_registrations
  ADD COLUMN IF NOT EXISTS baptism_place TEXT,
  ADD COLUMN IF NOT EXISTS baptism_other_parish TEXT;
