--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-1.pgdg20.04+1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    user_id integer NOT NULL,
    big_link text NOT NULL,
    short_link text NOT NULL,
    count integer NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: ranking; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ranking (
    id integer NOT NULL,
    user_id integer NOT NULL,
    link_count integer,
    visits_count integer
);


--
-- Name: ranking_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ranking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ranking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ranking_id_seq OWNED BY public.ranking.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    id_user integer NOT NULL,
    token text NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    email text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: ranking id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking ALTER COLUMN id SET DEFAULT nextval('public.ranking_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (7, 4, 'http://www.youtube.com', 'TxcGq7UN', 52);
INSERT INTO public.links VALUES (9, 8, 'https://www.facebook.com', 'EE0sDt4c', 0);
INSERT INTO public.links VALUES (10, 8, 'https://www.facebook.com', 'yG1m3-4U', 0);
INSERT INTO public.links VALUES (12, 8, 'https://www.facebook.com.br', '-E4VRHtk', 0);
INSERT INTO public.links VALUES (13, 8, 'https://www.youtube.com.br', 'pETIKTka', 0);
INSERT INTO public.links VALUES (15, 8, 'https://www.youtube.com.br', 'fbE-hNu7', 0);
INSERT INTO public.links VALUES (17, 1, 'https://www.youtube.com.br', 'ngolLeX7', 0);
INSERT INTO public.links VALUES (18, 1, 'https://www.youtube.com.br', 'ZqclFZ_0', 0);
INSERT INTO public.links VALUES (19, 1, 'https://www.youtube.com.br', 'vih5pxx0', 0);
INSERT INTO public.links VALUES (21, 1, 'https://www.youtube.com.br', 'JTvvk9U2', 0);
INSERT INTO public.links VALUES (22, 1, 'https://www.youtube.com.br', '08DK_tP8', 0);
INSERT INTO public.links VALUES (23, 1, 'https://www.youtube.com.br', '4gWRabe7', 0);
INSERT INTO public.links VALUES (24, 1, 'https://www.youtube.com.br', 'YPPvdkUD', 0);
INSERT INTO public.links VALUES (25, 10, 'https://www.google.com.br', 'TLTC5jg7', 13);
INSERT INTO public.links VALUES (16, 1, 'https://www.youtube.com.br', 'fMncYMLb', 11);
INSERT INTO public.links VALUES (11, 8, 'https://www.facebook.com.br', 'pWPhxlWA', 22);
INSERT INTO public.links VALUES (20, 1, 'https://www.youtube.com.br', 'CgrmCx0J', 12);
INSERT INTO public.links VALUES (14, 8, 'https://www.youtube.com.br', 'FAhJ0IKm', 10);


--
-- Data for Name: ranking; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (3, 4, '80a2623b-95a2-472e-abca-111eca2c2b8a');
INSERT INTO public.sessions VALUES (4, 8, '2db7bebd-8483-475e-b2f7-d87a6a9bb77d');
INSERT INTO public.sessions VALUES (5, 1, '6fcf7c7b-52c1-41df-bf0c-b0a3e1bf00f1');
INSERT INTO public.sessions VALUES (6, 9, '0da444be-5f0f-478d-8831-48264c5c5091');
INSERT INTO public.sessions VALUES (7, 9, '1dab5fad-2da4-4552-b164-b146b09905bf');
INSERT INTO public.sessions VALUES (8, 9, '77cdc3b9-f7db-49da-8966-07a774e00503');
INSERT INTO public.sessions VALUES (9, 9, 'ab9e6800-dd01-4258-b078-e06c523ffcdb');
INSERT INTO public.sessions VALUES (10, 9, '43662686-1842-416c-aafc-66c73ceeb95e');
INSERT INTO public.sessions VALUES (11, 10, 'df03a64e-9a17-494c-80cd-427df0f7080e');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'joao', '123', 'joao@email.com');
INSERT INTO public.users VALUES (2, 'pedro', '123', 'pedro@email.com');
INSERT INTO public.users VALUES (3, 'augusto', '123', 'augusto@email.com');
INSERT INTO public.users VALUES (4, 'ze', '123', 'ze@email.com');
INSERT INTO public.users VALUES (5, 'joaozinho', '123', 'joaozinho@email.com');
INSERT INTO public.users VALUES (6, 'marco', '123', 'marco@email.com');
INSERT INTO public.users VALUES (7, 'marcos', '123', 'marcos@email.com');
INSERT INTO public.users VALUES (8, 'pedri', '123', 'pedri@email.com');
INSERT INTO public.users VALUES (9, 'pedrox', '$2b$10$JvilygK2zKV1N5DurVsdwu/vtY0uW5Jvi/J75craY4llx068vaED6', 'pedrox@email.com');
INSERT INTO public.users VALUES (10, 'pedrinho', '$2b$10$4aH96AdbYJm6t3AFuWU6suc67/U1l9WxgWE5eBl5KaXEwbg.LxtiG', 'pedrinho@email.com');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 25, true);


--
-- Name: ranking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ranking_id_seq', 1, false);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 11, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: ranking ranking_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: ranking ranking_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sessions sessions_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

