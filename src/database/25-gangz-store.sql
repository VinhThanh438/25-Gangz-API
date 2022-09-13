-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2022 at 06:31 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `25-gangz-store`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `imgAddress` varchar(255) NOT NULL,
  `condition` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `imgAddress`, `condition`) VALUES
(0, 'nike air max', '2.500.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold'),
(1, 'nike blazer', '2.300.000', 'https://i.pinimg.com/564x/1d/b9/27/1db927ef92eef70bf1c4e122fee54e45.jpg', ''),
(9, 'nike blazer', '2.340.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold'),
(13, 'nike air force', '2.000.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', ''),
(14, 'nike air max', '2.500.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold'),
(15, 'nike air max(edit)', '2.500.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold'),
(16, 'nike air max(edit)', '2.500.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold'),
(18, 'nike air max', '2.500.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold'),
(19, 'nike air max', '2.500.000', 'https://i.pinimg.com/736x/3e/0d/2a/3e0d2a0309baaeba524d09cc23d80327.jpg', 'sold');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(10) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `userName`, `userPassword`, `isAdmin`) VALUES
(15, 'admin', '$2b$10$12OeDBCqgWs2ccyIxBjcG.tP92UuWnKnzStvZ49PZct1x/RpvAULO', 1),
(16, 'user1', '$2b$10$pmNf.pG2laGv3OJv2arlqe1Nrrq6byivUb9Rup2BdTjpyewdJUseq', NULL),
(19, 'user2', '$2b$10$KtRZAZx/QJLbNR3MXQBNNemVgMc/T3OyhttIvtN8LsqHh4eyz3nHm', NULL),
(31, 'user4', '$2b$10$qT6uoDvYT5lVLzmwezRx7OLJuqFpZsj1PCyGztt4zZp/DLnioa.X6', NULL),
(32, 'user5', '$2b$10$T1hQCur7oAFtwc8kKzpGfecLW18XhNp4HjTl8KJxgAwcmkk3u98nm', NULL),
(33, 'user6', '$2b$10$QY/MEZo6hrsCBBkDb7mtau3088lcgOBIrZRSm6FhgQSBxdJUVonba', NULL),
(34, 'user7', '$2b$10$m6TNrsh/y0tomXTJCVxqNucq3mwpx24WoSz9x5d7af0jmT8CGUu0a', NULL),
(35, 'user8', '$2b$10$ns3zysbO8ak843QMAkjG6Op76nx43RS02.Zb7OUof3JIHUTk7ntji', NULL),
(36, 'user9', '$2b$10$BwpcfwIv7pIwE4vllm6yn.J/7n7JbbOv2oPVN70SI2GrKldtXnRoi', NULL),
(37, 'user10', '$2b$10$u6HwP55d0iYQUQTukWmSUudXSyuZunyMBPlt4Wy8oBe00pk8/.OW6', NULL),
(38, 'user11', '$2b$10$ICPmgVmE3JOBeKeiYF5rpOPWAmTrMDR8M9dohL0Z4o/FGLtC3YcDa', NULL),
(39, 'user12', '$2b$10$aPVUHjNdmbuowviBX6ySw.THoBCRFICct0oUDBgrMDd2Z5zS15Npq', NULL),
(40, 'user13', '$2b$10$k8QjEhe9IDRXQtgNe2lyheLDKdbWbbS1OxdnhH/SyWrU/bKJ8edWG', NULL),
(41, 'user14', '$2b$10$dccnonlMzjVtYagAzoJncOvaXGjU0ho42cFWt8XkJWwLRCYvOcnMe', NULL),
(42, 'user15', '$2b$10$uvrUYdo3ywWYzlfNQESfHuK5YWs.q55vDQbfv7KB8R8wH0pjE7RIe', NULL),
(43, 'user16', '$2b$10$yOxpy3QXDnK/uW..q4bsnuddNz7bEkhc40khF9PZvHbgF2xjiyjEW', NULL),
(44, 'user17', '$2b$10$PMIdXkmDDX4d7Ez5dXklau9TlvNWTaFGxe91BpiA2.PLvAde9QY7K', NULL),
(45, 'user18', '$2b$10$VLQK4Yipq.gdTp9JHabWkuaIrVrlQXeoTrEoz4alvwIwCUb8Eqhuq', NULL),
(46, 'user19', '$2b$10$gnnJKvsmx3B8wpzi/Rx56um.T4vu/3rratCDBnrJmoX9XQElY5sM.', NULL),
(47, 'user20', '$2b$10$zgvcPtWW1qnGXTPFNv2xH.OxnIsjwfHKBCIM2GrJF9G2Fv1nEr.Q6', NULL),
(48, 'user21', '$2b$10$iLmVSPjbB76Yf0mVCOq6xuOD3WmpiTSQaafDxkPSF9PbTBG/YV4.i', NULL),
(49, 'user22', '$2b$10$r5XB7W4ZHgYz6gHi4yukr.yallaI6fIUTBJ7hMRrwbn/RmuEBh4Oe', NULL),
(50, 'user23', '$2b$10$Nl4So75o87lnvL95rd8v2O6RKbD.ZfKp7R/eBRUsuH9S6Qgdcrnba', NULL),
(51, 'user24', '$2b$10$pPWWYZWBMyIalqxvyOiuJ.RYxu6FAG7hebONcfBopzRNH8/P8.FNy', NULL),
(52, 'user25', '$2b$10$yRajn3/jIQ0NnC98OOZe..U0yPyv9tsxBLUY/ONnFFgYvfuui5QEa', NULL),
(53, 'user26', '$2b$10$ElUvCG7LNMkL3YM8Dh4WeeSdxg7lgvd/pT5ZrXFZjpZUm2qyS23ZS', NULL),
(54, 'user27', '$2b$10$14mi.ioiVeMJDxbrt79UgOEdTb0bu19VShUwwACSLrKt6XVMY/h5u', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
