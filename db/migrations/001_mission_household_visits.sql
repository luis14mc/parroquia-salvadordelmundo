CREATE TABLE IF NOT EXISTS mission_household_visits (
  id BIGSERIAL PRIMARY KEY,
  address_reference TEXT NOT NULL,
  visit_date DATE NOT NULL,
  visit_time TIME,
  missionary_name TEXT NOT NULL,
  sector_zone TEXT,
  total_people INTEGER,
  adults INTEGER,
  children INTEGER,
  predominant_religion TEXT,
  kerigma_response TEXT,
  followup_accepted TEXT,
  followup_types TEXT[] NOT NULL DEFAULT '{}',
  detected_needs TEXT[] NOT NULL DEFAULT '{}',
  has_risks TEXT,
  next_visit_date DATE,
  responsible_name TEXT,
  responsible_phone TEXT,
  coordinator_name TEXT,
  zonal_delivery_date DATE,
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_mission_household_visits_visit_date
  ON mission_household_visits (visit_date DESC);

CREATE INDEX IF NOT EXISTS idx_mission_household_visits_sector_zone
  ON mission_household_visits (sector_zone);

CREATE INDEX IF NOT EXISTS idx_mission_household_visits_next_visit_date
  ON mission_household_visits (next_visit_date);

CREATE INDEX IF NOT EXISTS idx_mission_household_visits_payload
  ON mission_household_visits USING GIN (payload);