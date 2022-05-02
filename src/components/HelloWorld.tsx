import { css } from '@emotion/react';
import { Button, Stack } from '@mui/material';

type HelloWorldProps = {
  text: string;
};

const style = css`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: red;
  }

  .title {
    margin: 0;
  }

  .read {
    font-size: 24px;
    color: #aaa;
  }
`;
const HelloWorld = ({ text }: HelloWorldProps) => (
  <div css={style}>
    <h1 className="title">Vite + React + TypeScript + Storybook</h1>
    <Button variant="contained">Help</Button>
    <Stack spacing={1}>
      <div>Help2</div>
      <div>Help2</div>
    </Stack>
    <p className="read">hello {text}!!</p>
  </div>
);

export default HelloWorld;
