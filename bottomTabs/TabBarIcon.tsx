import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
  focused: boolean;
  color: string;
  size: number;
  name: string;
};

export const TabBarIcon = ({
  focused,
  color,
  size,
  name,
}: Props): JSX.Element => {
  const iconName = focused ? name : `${name}-outline`;
  return <Ionicons name={iconName} size={size} color={color} />;
};
