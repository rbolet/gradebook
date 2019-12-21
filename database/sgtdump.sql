-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 20, 2019 at 04:56 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gradeTable`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentGrades`
--

CREATE TABLE `studentGrades` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `grade` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `studentGrades`
--

INSERT INTO `studentGrades` (`id`, `name`, `course`, `grade`) VALUES
(2, 'Ford Prefect', 'Hitchhiking', '88'),
(3, 'Arthur Dent', 'Hitchhiking', '55'),
(4, 'Bowl of Petunias', 'Not Again', '79'),
(6, 'Deep Thought', 'Answering the Question', '42'),
(7, 'Mouse', 'World Building', '90');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studentGrades`
--
ALTER TABLE `studentGrades`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `studentGrades`
--
ALTER TABLE `studentGrades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
