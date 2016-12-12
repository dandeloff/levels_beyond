CREATE DATABASE `notes`;

use `notes`;

CREATE TABLE `notes`.`notes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `body` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));