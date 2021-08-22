import React, { useState } from "react";
import styled from "styled-components";
import RulesContainer from "./RulesContainer";

const SyledRules = styled.button`
  margin-top: auto;
  width: fit-content;
  font-size: 1.6rem;
  letter-spacing: 1px;
  padding: 0.8rem 3.2rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: transparent;
  border: 2px solid var(--headerOutline);
  border-radius: 5px;
  color: #fff;
  align-self: center;
`;

const RulesButton = () => {
  const [rulesContainerOpen, setRulesContainerOpen] = useState(false);

  return (
    <>
      <SyledRules onClick={() => setRulesContainerOpen(true)}>Rules</SyledRules>
      {rulesContainerOpen && (
        <RulesContainer closeContainer={() => setRulesContainerOpen(false)} />
      )}
    </>
  );
};

export default RulesButton;
