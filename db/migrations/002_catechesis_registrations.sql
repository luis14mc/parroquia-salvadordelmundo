CREATE TABLE IF NOT EXISTS catechesis_registrations (
  id BIGSERIAL PRIMARY KEY,
  program_type TEXT NOT NULL CHECK (program_type IN ('adultos', 'primera-comunion', 'confirmacion')),
  participant_name TEXT NOT NULL,
  birth_date DATE NOT NULL,
  contact_phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  sector TEXT,
  guardian_name TEXT,
  baptism_status TEXT,
  communion_status TEXT,
  no_sacraments_confirmed BOOLEAN NOT NULL DEFAULT false,
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pendiente' CHECK (status IN ('pendiente', 'contactado', 'admitido', 'no-admitido', 'retirado')),
  notes TEXT,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_catechesis_registrations_program
  ON catechesis_registrations (program_type);

CREATE INDEX IF NOT EXISTS idx_catechesis_registrations_phone
  ON catechesis_registrations (contact_phone);

CREATE INDEX IF NOT EXISTS idx_catechesis_registrations_status
  ON catechesis_registrations (status);

CREATE INDEX IF NOT EXISTS idx_catechesis_registrations_created_at
  ON catechesis_registrations (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_catechesis_registrations_payload
  ON catechesis_registrations USING GIN (payload);