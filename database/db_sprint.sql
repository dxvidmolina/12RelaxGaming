CREATE DATABASE  IF NOT EXISTS db_sprint /*!40100 DEFAULT CHARACTER SET latin1 */;
USE db_sprint;
-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: db_sprint
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES 
(1,'Accion'),
(2,'Disparos'),
(3,'Estrategia'),
(4,'Simulación'),
(5,'Deporte'),
(6,'Carreras'),
(7,'Aventura'),
(8,'Rol'),
(9,'Otro');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imgrefs`
--

DROP TABLE IF EXISTS `imgrefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imgrefs` (
  `id` int(11) NOT NULL,
  `imgref1` varchar(100) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imgrefs`
--

LOCK TABLES `imgrefs` WRITE;
/*!40000 ALTER TABLE `imgrefs` DISABLE KEYS */;
INSERT INTO `imgrefs` VALUES (1,'Captura1.png',1),
(2,'tribesproducto.jpg',1),
(3,'tribes1.jpg',1),
(4,'tribes2.jpg',1),
(5,'tribes2.jpg',1),
(6,'tribes3.jpg',1),
(7,'tribes4.jpg',1),
(8,'Captura2.PNG',2),
(9,'battlefieldproducto.jpg',2),
(10,'battlefield1.jpg',2),
(11,'battlefield2.jpg',2),
(12,'battlefield3.jpg',2),
(13,'battlefield4.jpg',2),
(14,'Captura3.PNG',3),
(15,'grandproducto.jpg',3),
(16,'grand1.jpg',3),
(17,'grand2.jpg',3),
(18,'grand3.jpg',3),
(19,'grand4.jpg',3),
(20,'foto1carrito.jpg',4),
(21,'newworldproducto.jpg',4),
(22,'newworld1.jpg',4),
(23,'newworld2.jpg',4),
(24,'newworld3.jpg',4),
(25,'newworld4.jpg',4),
(26,'foto2carrito.jpg',5),
(27,'ascentproducto.jpg',5),
(28,'ascent1.jpg',5),
(29,'ascent2.jpg',5),
(30,'ascent3.jpg',5),
(31,'ascent4.jpg',5),
(32,'foto4carrito.jpg',6),
(33,'chivalryproducto.jpg',6),
(34,'chivalry1.jpg',6),
(35,'chivalry2.jpg',6),
(36,'chivalry3.jpg',6),
(37,'chivalry4.jpg',6),
(38,'foto5carrito.jpg',7),
(39,'masseffectproducto.jpg',7),
(40,'masseffect1.jpg',7),
(41,'masseffect2.jpg',7),
(42,'masseffect3.jpg',7),
(43,'masseffect4.jpg',7),
(44,'foto6carrito.jpg',8),
(45,'daysgoneproducto.jpg',8),
(46,'daysgone1.jpg',8),
(47,'daysgone2.jpg',8),
(48,'daysgone3.jpg',8),
(49,'daysgone4.jpg',8),
(50,'foto6carrito.jpg',9),
(51,'daysgoneproducto.jpg',9),
(52,'daysgone1.jpg',9),
(53,'daysgone2.jpg',9),
(54,'daysgone3.jpg',9),
(55,'daysgone4.jpg',9),
(56,'predatoricon.jpg',10),
(57,'predatorproducto.jpg',10),
(58,'predator1.jpg',10),
(59,'predator2.jpg',10),
(60,'predator3.jpg',10),
(61,'predator4.jpg',10),
(62,'fortressicon.jpg',11),
(63,'fortressproducto.jpg',11),
(64,'fortress1.jpg',11),
(65,'fortress2.jpg',11),
(66,'fortress3.jpg',11),
(67,'fortress4.jpg',11),
(68,'rogueicon.jpg',12),
(69,'rogueproducto.jpg',12),
(70,'rogue1.jpg',12),
(71,'rogue2.jpg',12),
(72,'rogue3.jpg',12),
(73,'rogue4.jpg',12),
(74,'dotaicon.jpg',13),
(75,'dotaproducto.jpg',13),
(76,'dota1.jpg',13),
(77,'dota2.jpg',13),
(78,'dota3.jpg',13),
(79,'dota4.jpg',13),
(80,'horizonicon.jpg',14),
(81,'horizonproducto.jpg',14),
(82,'horizon1.jpg',14),
(83,'horizon2.jpg',14),
(84,'horizon3.jpg',14),
(85,'horizon4.jpg',14),
(86,'fallout4.jpg',15),
(87,'fallout-3-remake.jpg',15),
(88,'ss_910437ac708aed7c028f6e43a6224c633d086b0a116x65.jpg',15),
(89,'ss_c310f858e6a7b02ffa21db984afb0dd1b24c1423116x65.jpg',15),
(90,'ss_f649b8e57749f380cca225db5074edbb1e06d7f5116x65.jpg',15),
(91,'ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf116x65.jpg',15),
(92,'scrollicon.png',16),
(93,'scrollproducto.jpg',16),
(94,'scroll1.jpg',16),
(95,'scroll2.jpg',16),
(96,'scroll3.jpg',16),
(97,'scroll4.jpg',16),
(98,'thewitchicon.jpg',17),
(99,'thewitchproducto.jpg',17),
(100,'thewitch1.jpg',17),
(101,'thewitch2.jpg',17),
(102,'thewitch3.jpg',17),
(103,'thewitch4.jpg',17);
/*!40000 ALTER TABLE `imgrefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(480) NOT NULL,
  `discount` int(11) NOT NULL,
  `creation_date` datetime NOT NULL,
  `genre_id` int(11) NOT NULL,
  `imgref` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Tribes of Midgard',333,'Un juego increible para jugar',30,'2020-12-16 12:00:00',1,'tribesproducto.jpg'),
(2,'Battlefield',900,'Battlefield 2042 es un juego de disparos en primera persona que marca el regreso de la iconica guerra total de la franquicia. Adaptate en un mundo del futuro cercano transformado por el desorden y vence en campos de batalla cambiantes con la ayuda de tu escuadron y un arsenal innovado',70,'2020-12-20 12:40:12',1,'Captura2.PNG'),
(3,'Grand Theft Auto V',700,'Grand Theft Auto V para PC ofrece a los jugadores la opcion de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolucion de 4K y disfrutar del juego a 60 fotogramas por segundo.',15,'2020-12-16 16:55:16',1,'Captura3.PNG'),
(4,'New World',999,'Explora un electrizante videojuego MMO de mundo abierto. Forja tu destino en Aeternum, una isla sobrenatural donde hallaras toda clase de peligros y oportunidades.',10,'2021-01-25 06:15:50',1,'foto1carrito.jpg'),
(5,'The Ascent',900,'The Ascent es un shooter RPG de accion individual y cooperativo ambientado en un mundo ciberpunk. El Grupo Ascension, la megacorporacion a la que todos pertenecen, ha quebrado. Â¿Sobreviviras sin el?',10,'2020-08-12 15:20:41',1,'foto2carrito.jpg'),
(6,'Chivalry: MW',2000,'Asedia castillos y asalta pueblos en Chivalry: Medieval Warfare, un trepidante slasher medieval en primera persona que se centra en las batallas multijugador.',30,'2020-12-16 10:05:12',1,'foto4carrito.jpg'),
(7,'Mass Effect',3000,'Mass Effect Legendary Edition incluye el contenido basico para un jugador y mas de cuarenta arti­culos descargables de Mass Effect, Mass Effect 2 y Mass Effect 3, ademas de armas, armaduras y paquetes promocionales remasterizados y optimizados en 4K Ultra HD.',30,'2021-02-12 12:01:00',1,'foto5carrito.jpg'),
(8,'Days Gone',1500,'Conduce y lucha en Estados Unidos, un lugar letal tras una pandemia.Como Deacon St. John, un motociclista errante y cazarrecompensas que viaja por el camino averiado y lucha por sobrevivir a la vez que busca una razon para vivir en este juego de accion y aventura en un mundo abierto',15,'2021-01-20 14:00:16',1,'foto6carrito.jpg'),
(9,'Predator: Hunting Grounds',500,'Disfruta de este juego de disparos multijugador asimetrico* donde se enfrentan humanos y depredador. Solo recuerda: o cazas o te cazan! Forma parte de un grupo comando y completa las misiones antes de que el depredador te encuentre. O juega como el depredador y caza a tus presas',30,'2021-03-21 14:20:02',1,'predatoricon.jpg'),
(10,'Apex Legends Founders edition',1500,'Apex Legends es el galardonado juego de disparos de heroes gratuito de Respawn Entertainment. Controla un elenco en aumento de personajes con habilidades poderosas y disfruta del juego estrategico por escuadrones y de la dinamica de juego innovadora del nuevo Battle Royale.',10,'2020-12-25 14:20:07',1,'fortressicon.jpg'),
(11,'Team Fortress 2',1500,'Las distintas clases proporcionan una amplia gama de habilidades tacticas y personalidades. Constantemente actualizado con nuevos modos de juego, mapas, equipo y, lo mas importante, sombreros!',5,'2021-07-20 12:06:10',1,'rogueicon.jpg'),
(12,'Rogue Company',2000,'Unete a mas de 20 millones de jugadores en Rogue Company, el mejor juego de disparos tactico en tercera persona! Conviertete en un mercenario y usa poderosas armas, artefactos de alta tecnologi­a y habilidades decisivas. Acepta la mision y disfruta de modos de juego 4v4 y 6v6',25,'2021-05-06 16:06:01',1,'dotaicon.jpg'),
(13,'Dota 2',750,'Cada di­a, millones de jugadores de todo el mundo entran en batalla como uno de los mas de cien heroes de Dota. Y no importa si es su decima o su milesima hora de juego: siempre hay algo nuevo que descubrir.',22,'2021-08-22 12:40:50',1,'dotaicon.jpg'),
(14,'Horizon Zero Dawn',2000,'Vive la mision legendaria de Aloy para revelar los secretos de una futura Tierra dominada por maquinas. Usa ataques devastadores contra tus presas y explora un majestuoso mundo abierto en este galardonado RPG de accion!',10,'2021-03-26 18:10:50',1,'dotaicon.jpg'),
(15,'Fallout 4',1500,'Bethesda Game Studios, los galardonados creadores de Fallout 3 y The Elder Scrolls V: Skyrim, te dan la bienvenida al mundo de Fallout 4, su juego mas ambicioso hasta la fecha y la proxima generacion de juegos de mundo abierto.',10,'2021-09-29 14:06:17',1,'dotaicon.jpg'),
(16,'The Elder Scrolls',1700,'unete a mas de 18 millones de jugadores en este RPG multijugador online y vive una aventura sin li­mites en el mundo de The Elder Scrolls',5,'2020-11-15 18:06:18',1,'dotaicon.jpg'),
(17,'The Witcher',1500,'Justo en el momento en el que la guerra se propaga por los Reinos del Norte, aceptas el contrato mas desafiante de tu vida: rastrear a la Nii±a de la profeci­a, un arma viviente que puede alterar el mundo tal y como lo conocemos.',4,'2021-09-12 12:20:59',1,'dotaicon.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `creation_date` DATE NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `nickname` varchar(15),
  `pais` varchar(15) NOT NULL,
  `edad` int(11) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','apellidoadmin', '2020-12-16 12:00:00','admin@gmail.com','admin123','admin','Argentina',12, "Vendedor");
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_sprint'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25  0:15:32