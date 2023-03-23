import React from "react";
import styled from "styled-components";

const SquareButton = styled.button`
	border: 2px solid orange;
	font-size: 30px;
	font-weight: 800;
	cursor: pointer;
	outline: none;
`;

interface SquareProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	value: string;
}

export const Square: React.FC<SquareProps> = ({ onClick, value }) => {
	return <SquareButton onClick={onClick}>{value}</SquareButton>;
};
