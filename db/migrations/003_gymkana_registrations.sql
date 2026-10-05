CREATE TABLE IF NOT EXISTS gymkana_registrations (
  id BIGSERIAL PRIMARY KEY,
  participant_name TEXT NOT NULL,
  birth_date DATE NOT NULL,
  contact_phone TEXT NOT NULL,
  email TEXT,
  sector TEXT NOT NULL CHECK (sector IN ('santa-cruz', 'salvador-del-mundo', 'santa-rosa-de-lima', 'sagrado-corazon')),
  allergies_medical TEXT,
  guardian_name TEXT,
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pendiente' CHECK (status IN ('pendiente', 'contactado', 'confirmado', 'no-asistio')),
  notes TEXT,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_gymkana_registrations_phone
  ON gymkana_registrations (contact_phone);

CREATE INDEX IF NOT EXISTS idx_gymkana_registrations_sector
  ON gymkana_registrations (sector);

CREATE INDEX IF NOT EXISTS idx_gymkana_registrations_status
  ON gymkana_registrations (status);

CREATE INDEX IF NOT EXISTS idx_gymkana_registrations_created_at
  ON gymkana_registrations (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_gymkana_registrations_payload
  ON gymkana_registrations USING GIN (payload);