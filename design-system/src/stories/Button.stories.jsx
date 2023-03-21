import React from "react";
import { storiesOf } from "@storybook/react";
import { useState } from "react";
import './styles.css';

import { Button } from "../components/Button";

const stories = storiesOf('Button Test', module)

//add a story
stories.add('Button', () => {
    return (
    <Button text="click me" color="blue" />
  )
})