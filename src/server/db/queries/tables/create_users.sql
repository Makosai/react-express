CREATE TABLE IF NOT EXISTS `users` (
  `id` binary(16) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(76) NOT NULL
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;