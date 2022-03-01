-- Table: public.SequelizeMeta

-- DROP TABLE IF EXISTS public."SequelizeMeta";

CREATE TABLE IF NOT EXISTS public."SequelizeMeta"
(
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."SequelizeMeta"
    OWNER to root;