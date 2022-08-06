-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4306
-- Generation Time: Aug 05, 2022 at 09:26 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nploy_native`
--

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `id` int(11) NOT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banks`
--

INSERT INTO `banks` (`id`, `bank_id`, `bank_name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Banlgadesh Bank', '2022-08-04 08:56:52', '2022-08-04 09:01:09'),
(2, 2, 'Janata Bank', '2022-08-04 08:57:04', '2022-08-04 09:01:29'),
(3, 3, 'Agrani Bank', '2022-08-04 08:57:13', '2022-08-04 09:01:52'),
(4, 4, 'Islami Bank', '2022-08-04 08:57:31', '2022-08-04 08:57:31'),
(5, 5, 'City Bank', '2022-08-04 08:57:40', '2022-08-04 08:57:40'),
(6, 6, 'Dutch Bangla Bank', '2022-08-04 08:57:52', '2022-08-04 08:57:52'),
(7, 7, 'Bank Ashia', '2022-08-04 08:58:07', '2022-08-04 08:58:07'),
(8, 8, 'Ab Bank', '2022-08-04 08:58:15', '2022-08-04 08:58:15');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `customer_code` int(11) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `customer_code`, `customer_name`, `customer_address`, `createdAt`, `updatedAt`) VALUES
(1, 25024, 'Jakir Hossain', 'Mohammadpur,Dhaka-1207', '2022-08-04 07:56:25', '2022-08-04 07:56:25'),
(2, 2904, 'Rawaha Abdullah Sami', 'Basila,Dhaka-1207', '2022-08-04 07:58:17', '2022-08-04 07:58:17'),
(3, 2905, 'Abdur Rahman Saad', 'Basila,Dhaka-1207', '2022-08-04 07:58:35', '2022-08-04 07:58:35'),
(4, 2906, 'Ibrahim Salman', 'Basila,Dhaka-1207', '2022-08-04 07:58:48', '2022-08-04 07:58:48'),
(5, 2907, 'Aysha Tasnim', 'Barishal', '2022-08-04 07:59:15', '2022-08-04 07:59:15'),
(6, 2908, 'Anisha Rahman Orin', 'Barishal', '2022-08-04 07:59:31', '2022-08-04 07:59:31'),
(7, 2909, 'Jabir Al Hasan', 'Madaripur', '2022-08-04 07:59:47', '2022-08-04 07:59:47'),
(8, 29010, 'Mowaz', 'Madaripur', '2022-08-04 07:59:57', '2022-08-04 07:59:57'),
(9, 29011, 'Jara', 'Madaripur', '2022-08-04 08:00:34', '2022-08-04 08:00:34'),
(10, 29012, 'Redoyan Ahmed', 'Madaripur', '2022-08-04 08:00:47', '2022-08-04 08:00:47'),
(11, 29013, 'Shaharian Islam Emon', 'Madaripur', '2022-08-04 08:01:11', '2022-08-04 08:01:11'),
(15, 2915, 'Emon Islam', 'Madaripur', '2022-08-04 08:36:18', '2022-08-04 08:40:25');

-- --------------------------------------------------------

--
-- Table structure for table `money_receipt`
--

CREATE TABLE `money_receipt` (
  `id` int(11) NOT NULL,
  `customer_code` int(11) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `money_receipt`
--

INSERT INTO `money_receipt` (`id`, `customer_code`, `customer_name`, `bank_id`, `bank_name`, `amount`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 2904, 'Rawaha Abdullah Sami', 1, 'Bangladesh Bank', 500000.00, 'Send 5 Lakh Money', '2022-08-04 09:45:08', '2022-08-04 09:45:08'),
(2, 2905, 'Abdur Rahman Saad', 2, 'Janata Bank', 1000000.00, 'Send 10 Lakh Money', '2022-08-04 09:54:56', '2022-08-04 09:54:56'),
(3, 2906, 'Ibrahim Salman', 3, 'Agrani Bank', 1200000.00, 'Send 12 Lakh Money', '2022-08-04 09:55:33', '2022-08-04 09:55:33'),
(4, 2907, 'Aysha Tasnim', 4, 'Islami Bank', 5000000.00, 'Send 50 Lakh Money', '2022-08-04 09:56:06', '2022-08-04 09:56:06'),
(5, 2908, 'Anisha Rahman Orin', 5, 'City Bank', 7500000.00, 'Send 75 Lakh Money', '2022-08-04 09:56:49', '2022-08-04 09:56:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `money_receipt`
--
ALTER TABLE `money_receipt`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `money_receipt`
--
ALTER TABLE `money_receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
