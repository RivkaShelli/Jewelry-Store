-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2022 at 08:43 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jewelry_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `makat` int(11) NOT NULL,
  `category` enum('Rings','Braclets','Neckles','Earrings') COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL,
  `color` enum('Gold','Silver','Copper','Pearl') COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `pic_url` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`makat`, `category`, `price`, `color`, `description`, `pic_url`) VALUES
(75483, 'Earrings', 150, 'Gold', 'no description', '`https://i.pinimg.com/550x/63/a0/57/63a05715cc1d638ad8cab8ccdbcef7fe.jpg`'),
(75964, 'Neckles', 480, 'Silver', 'Tight chain', '`https://i.pinimg.com/736x/ef/be/f4/efbef48e2fb7f6eb9e6f989cceb40bee.jpg`'),
(89756, 'Braclets', 350, 'Pearl', 'Pearl bracelet', '`https://i.pinimg.com/564x/04/11/8d/04118df4263a9f11b2a2d88a3c9b7ea1.jpg`'),
(224458, 'Rings', 200, 'Gold', 'Marrige Ring', '`https://images.mitchatnim.co.il/customers/80179561/28d0de9535bd4423a3744d81413d6e88.jpg`');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purchase_id` varchar(11) COLLATE utf8mb4_bin NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(32) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(11) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'osnat', 'od145@gmail.com', 'sdrg148'),
(2, 'rivka', 'rivka78@gmail.com', 'bhy78nj5'),
(3, 'sara', 'sreat@gmail.com', 'nvjff8956'),
(4, 'hadassa', 'jufs@gmail.com', 'jurie145');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`makat`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchase_id`,`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `makat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224459;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
