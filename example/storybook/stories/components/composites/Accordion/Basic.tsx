import React from 'react';
import { Accordion } from 'native-base';
export default function () {
  return (
    <Accordion index={[0, 1]}>
      <Accordion.Item>
        <Accordion.Summary>
          Section 1 title
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Details>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Summary>
          Section 2 title
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Details>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Summary>
          Section 3 title
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  );
}
