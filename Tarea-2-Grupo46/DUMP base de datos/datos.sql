PGDMP                         {            tarea2    15.3    15.3 @    Q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            R           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            S           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            T           1262    16398    tarea2    DATABASE     y   CREATE DATABASE tarea2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE tarea2;
                postgres    false            �            1259    16401    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    17810    defensas    TABLE     U   CREATE TABLE public.defensas (
    id integer NOT NULL,
    defensa text NOT NULL
);
    DROP TABLE public.defensas;
       public         heap    postgres    false            �            1259    17809    defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.defensas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.defensas_id_seq;
       public          postgres    false    228            U           0    0    defensas_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.defensas_id_seq OWNED BY public.defensas.id;
          public          postgres    false    227            �            1259    17799    diplomacias    TABLE     �   CREATE TABLE public.diplomacias (
    id_reino_1 integer NOT NULL,
    id_reino_2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
    DROP TABLE public.diplomacias;
       public         heap    postgres    false            �            1259    16874    karts    TABLE     �   CREATE TABLE public.karts (
    id integer NOT NULL,
    modelo text NOT NULL,
    color text NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public.karts;
       public         heap    postgres    false            �            1259    16873    karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.karts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.karts_id_seq;
       public          postgres    false    218            V           0    0    karts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.karts_id_seq OWNED BY public.karts.id;
          public          postgres    false    217            �            1259    17295    personaje_habita_reino    TABLE     �   CREATE TABLE public.personaje_habita_reino (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp(3) without time zone NOT NULL,
    es_gobernante boolean NOT NULL
);
 *   DROP TABLE public.personaje_habita_reino;
       public         heap    postgres    false            �            1259    16882    personaje_tiene_trabajo    TABLE     �   CREATE TABLE public.personaje_tiene_trabajo (
    id_trabajo integer NOT NULL,
    id_personaje integer NOT NULL,
    fecha_inicio timestamp(3) without time zone NOT NULL,
    fecha_termino timestamp(3) without time zone
);
 +   DROP TABLE public.personaje_tiene_trabajo;
       public         heap    postgres    false            �            1259    16865 
   personajes    TABLE     �   CREATE TABLE public.personajes (
    id integer NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento timestamp(3) without time zone NOT NULL,
    objeto text,
    nombre text NOT NULL
);
    DROP TABLE public.personajes;
       public         heap    postgres    false            �            1259    16864    personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.personajes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.personajes_id_seq;
       public          postgres    false    216            W           0    0    personajes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.personajes_id_seq OWNED BY public.personajes.id;
          public          postgres    false    215            �            1259    17804    reino_tiene_defensa    TABLE     �   CREATE TABLE public.reino_tiene_defensa (
    id_reino integer NOT NULL,
    id_defensa integer NOT NULL,
    fecha_instalacion timestamp(3) without time zone NOT NULL
);
 '   DROP TABLE public.reino_tiene_defensa;
       public         heap    postgres    false            �            1259    17301    reinos    TABLE     �   CREATE TABLE public.reinos (
    id integer NOT NULL,
    nombre text NOT NULL,
    ubicacion text NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public.reinos;
       public         heap    postgres    false            �            1259    17300    reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reinos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.reinos_id_seq;
       public          postgres    false    224            X           0    0    reinos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.reinos_id_seq OWNED BY public.reinos.id;
          public          postgres    false    223            �            1259    16888    trabajos    TABLE     m   CREATE TABLE public.trabajos (
    id integer NOT NULL,
    descripcion text,
    sueldo integer NOT NULL
);
    DROP TABLE public.trabajos;
       public         heap    postgres    false            �            1259    16887    trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trabajos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.trabajos_id_seq;
       public          postgres    false    221            Y           0    0    trabajos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.trabajos_id_seq OWNED BY public.trabajos.id;
          public          postgres    false    220            �           2604    20329    defensas id    DEFAULT     j   ALTER TABLE ONLY public.defensas ALTER COLUMN id SET DEFAULT nextval('public.defensas_id_seq'::regclass);
 :   ALTER TABLE public.defensas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    20330    karts id    DEFAULT     d   ALTER TABLE ONLY public.karts ALTER COLUMN id SET DEFAULT nextval('public.karts_id_seq'::regclass);
 7   ALTER TABLE public.karts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    20331    personajes id    DEFAULT     n   ALTER TABLE ONLY public.personajes ALTER COLUMN id SET DEFAULT nextval('public.personajes_id_seq'::regclass);
 <   ALTER TABLE public.personajes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    20332 	   reinos id    DEFAULT     f   ALTER TABLE ONLY public.reinos ALTER COLUMN id SET DEFAULT nextval('public.reinos_id_seq'::regclass);
 8   ALTER TABLE public.reinos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    20333    trabajos id    DEFAULT     j   ALTER TABLE ONLY public.trabajos ALTER COLUMN id SET DEFAULT nextval('public.trabajos_id_seq'::regclass);
 :   ALTER TABLE public.trabajos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            @          0    16401    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   �N       N          0    17810    defensas 
   TABLE DATA           /   COPY public.defensas (id, defensa) FROM stdin;
    public          postgres    false    228   RR       K          0    17799    diplomacias 
   TABLE DATA           H   COPY public.diplomacias (id_reino_1, id_reino_2, es_aliado) FROM stdin;
    public          postgres    false    225   �R       D          0    16874    karts 
   TABLE DATA           R   COPY public.karts (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    218   �R       H          0    17295    personaje_habita_reino 
   TABLE DATA           g   COPY public.personaje_habita_reino (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    222   tS       E          0    16882    personaje_tiene_trabajo 
   TABLE DATA           h   COPY public.personaje_tiene_trabajo (id_trabajo, id_personaje, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    219   �S       B          0    16865 
   personajes 
   TABLE DATA           R   COPY public.personajes (id, fuerza, fecha_nacimiento, objeto, nombre) FROM stdin;
    public          postgres    false    216   8T       L          0    17804    reino_tiene_defensa 
   TABLE DATA           V   COPY public.reino_tiene_defensa (id_reino, id_defensa, fecha_instalacion) FROM stdin;
    public          postgres    false    226   5U       J          0    17301    reinos 
   TABLE DATA           C   COPY public.reinos (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    224   �U       G          0    16888    trabajos 
   TABLE DATA           ;   COPY public.trabajos (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    221   iV       Z           0    0    defensas_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.defensas_id_seq', 6, true);
          public          postgres    false    227            [           0    0    karts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.karts_id_seq', 6, true);
          public          postgres    false    217            \           0    0    personajes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.personajes_id_seq', 12, true);
          public          postgres    false    215            ]           0    0    reinos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.reinos_id_seq', 9, true);
          public          postgres    false    223            ^           0    0    trabajos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.trabajos_id_seq', 18, true);
          public          postgres    false    220            �           2606    16409 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    17817    defensas defensas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.defensas
    ADD CONSTRAINT defensas_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.defensas DROP CONSTRAINT defensas_pkey;
       public            postgres    false    228            �           2606    17803    diplomacias diplomacias_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_pkey PRIMARY KEY (id_reino_1, id_reino_2);
 F   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_pkey;
       public            postgres    false    225    225            �           2606    16881    karts karts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_pkey;
       public            postgres    false    218            �           2606    17299 2   personaje_habita_reino personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_pkey PRIMARY KEY (id_personaje, id_reino);
 \   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_pkey;
       public            postgres    false    222    222            �           2606    16886 4   personaje_tiene_trabajo personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_pkey PRIMARY KEY (id_trabajo, id_personaje);
 ^   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_pkey;
       public            postgres    false    219    219            �           2606    16872    personajes personajes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.personajes
    ADD CONSTRAINT personajes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.personajes DROP CONSTRAINT personajes_pkey;
       public            postgres    false    216            �           2606    17808 ,   reino_tiene_defensa reino_tiene_defensa_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.reino_tiene_defensa
    ADD CONSTRAINT reino_tiene_defensa_pkey PRIMARY KEY (id_reino, id_defensa);
 V   ALTER TABLE ONLY public.reino_tiene_defensa DROP CONSTRAINT reino_tiene_defensa_pkey;
       public            postgres    false    226    226            �           2606    17308    reinos reinos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.reinos
    ADD CONSTRAINT reinos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.reinos DROP CONSTRAINT reinos_pkey;
       public            postgres    false    224            �           2606    16895    trabajos trabajos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.trabajos
    ADD CONSTRAINT trabajos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.trabajos DROP CONSTRAINT trabajos_pkey;
       public            postgres    false    221            �           1259    21010 '   personaje_habita_reino_id_personaje_key    INDEX     y   CREATE UNIQUE INDEX personaje_habita_reino_id_personaje_key ON public.personaje_habita_reino USING btree (id_personaje);
 ;   DROP INDEX public.personaje_habita_reino_id_personaje_key;
       public            postgres    false    222            �           2606    17818 '   diplomacias diplomacias_id_reino_1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_id_reino_1_fkey FOREIGN KEY (id_reino_1) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 Q   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_id_reino_1_fkey;
       public          postgres    false    224    225    3234            �           2606    17823 '   diplomacias diplomacias_id_reino_2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_id_reino_2_fkey FOREIGN KEY (id_reino_2) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 Q   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_id_reino_2_fkey;
       public          postgres    false    3234    224    225            �           2606    21691    karts karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_id_personaje_fkey;
       public          postgres    false    218    216    3223            �           2606    17309 ?   personaje_habita_reino personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_personaje_fkey;
       public          postgres    false    216    222    3223            �           2606    17314 ;   personaje_habita_reino personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_reino_fkey FOREIGN KEY (id_reino) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 e   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_reino_fkey;
       public          postgres    false    222    3234    224            �           2606    16906 A   personaje_tiene_trabajo personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 k   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey;
       public          postgres    false    219    3223    216            �           2606    16901 ?   personaje_tiene_trabajo personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey FOREIGN KEY (id_trabajo) REFERENCES public.trabajos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey;
       public          postgres    false    3229    221    219            �           2606    17833 7   reino_tiene_defensa reino_tiene_defensa_id_defensa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reino_tiene_defensa
    ADD CONSTRAINT reino_tiene_defensa_id_defensa_fkey FOREIGN KEY (id_defensa) REFERENCES public.defensas(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 a   ALTER TABLE ONLY public.reino_tiene_defensa DROP CONSTRAINT reino_tiene_defensa_id_defensa_fkey;
       public          postgres    false    228    226    3240            �           2606    17828 5   reino_tiene_defensa reino_tiene_defensa_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reino_tiene_defensa
    ADD CONSTRAINT reino_tiene_defensa_id_reino_fkey FOREIGN KEY (id_reino) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 _   ALTER TABLE ONLY public.reino_tiene_defensa DROP CONSTRAINT reino_tiene_defensa_id_reino_fkey;
       public          postgres    false    3234    224    226            @   f  x���kj+W�˫�8���G��
.\Ϋ!Bd�iŎ#9v~� ������j$,��Û��XmȈ6U�:"�/{�����{]�2�,S";i�ň�8�+̞�0G?é煀��5�o�oh7�ku�:�׿` �hB?~���3���O��g�b
|?u����m�&kB�[g+��	 q�����Bp�۔dc�*�@�6�gR�X�@��S�9�d�HAx#�Q�bh~�W@"�7~����Ѹ���*@���&a�I?��<� :y.#����������#[w�3Fm`��q�$��I��2O�~Խ��
�7֫R����~���I����0��n�w-�2�*q��;.�@�G({9)����s����%Eۅ}#�b;{r�n�S��@n���>A����A`��W|-!���&�&��|�9)+w�E�&��˲4	��L�C�t)����V���rչ��K5���M�ʦ���O��#�u��)�� t�W|�2�/��_+�2S�sr����w�u�}��ʞȆ%W����LȪ���Z��U*o�@�E��${�gW���9�x��h�Y�R?���GP/G�K	�m�S�2u�'����X�Y}��9���s�z���E�����r� ���E>�;��������;�2�*��l��Tt%�9�''�~1:���!���.;��*π��T)����'�<\ާ'
�Iu�^+��'��a�/����o�S}e��J�\�M�W�����"p����Ŭ�hݥb֕Y5�(��}oL�K��nT%�@�8�M�jL������s����c�'WlR���*�1[�f$��O�����~Q���H�,^|��z���+�9L�z������O�U��      N   W   x�3�t�J-J�,��2�t�/*I�I�J,�2��ML�L�2�)J�- ��r:�d�&*�V����s�q:��$+��*�e���r��qqq �(r      K   4   x�3�4�,�2�4�L�&@��md�q�E�8�$H�9��$A�1z\\\ M�
      D   g   x��1�0���)� �d���NK��.1��3ܞP�y����&?+z����_[cV���%��h��=���5���7��9�xY���������c44�Dt ҂      H   4   x�3�4�4202�50"+0�L�2�)c�C��˄��3Nczb���� 6g      E   p   x�u��� �o{�,��Ҁ3D&`�9j�Q���랱0�� ����H;4`FY��k�n�J��h�mN�%�&��F��rξ��_���qM���Y2dG�\�r��Q��G5      B   �   x�u�QJ�@��S�+3�1�>jAAE|��Y�;ec+�6A<B.f��Ja?���������*C.#:\iJ�m|�=ܮ�"`�Z��p����4
̼�<��j�e���+½J�%�A:2d����o�m��G�d%Iއ�}k}�
�Gˇef���U��D��f7h���ݡ��3��n���rC�F�SS��x���}���/�{�N�-�	��~X�i�1�����d:      L   l   x�m���0Cѳ<EPAʖke��?G��@�$ O�@|
ŀ�芶 빒z�_ݤ
#�ի��������M<P07{��={#1�����?\Ie�n���t��Ԧ��UJ��y.�      J   �   x�M�1�0Eg�=J[
bn�"�,,VbADjWM8G@�#HD0~���s�/��nzN/�퍭d��\k�
�q���$#ż�����XKm$�S-`̀�BC��0
�4�u�Y��+ݳ��9Փ�0��WK���ě���ę*:K8��$�a1�"hu�)��&hI�      G   �   x��1�0�ٹ(i�R��LL,�F(�U�"q$F�Ћg���m����Z���(�-�S�{�:�-��<��۲���5��+��%>�H%Q��w��S��u%�8pB�M�-x�quZ��8!����T�ApF���o!Q�_D��}9�:V���R��=�     