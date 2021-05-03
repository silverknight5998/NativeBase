import React from 'react';
import {
  SimpleGrid,
  MoonIcon,
  SunIcon,
  CheckIcon,
  CircleIcon,
  ArrowBackIcon,
  AddIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  SmallCloseIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  MinusIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  SearchIcon,
  WarningIcon,
  WarningTwoIcon,
} from 'native-base';

export default function () {
  const icons = [
    <AddIcon />,
    <ArrowBackIcon />,
    <ArrowForwardIcon />,
    <ArrowUpIcon />,
    <ArrowDownIcon />,
    <CheckIcon />,
    <CheckCircleIcon />,
    <ChevronDownIcon />,
    <ChevronLeftIcon />,
    <ChevronRightIcon />,
    <ChevronUpIcon />,
    <CircleIcon />,
    <CloseIcon />,
    <SmallCloseIcon />,
    <HamburgerIcon />,
    <InfoIcon />,
    <InfoOutlineIcon />,
    <MinusIcon />,
    <MoonIcon />,
    <QuestionIcon />,
    <QuestionOutlineIcon />,
    <SearchIcon />,
    <SunIcon />,
    <WarningIcon />,
    <WarningTwoIcon />,
  ];
  return (
    <SimpleGrid columns={7} space={8}>
      {icons}
    </SimpleGrid>
  );
}
