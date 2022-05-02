import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Counter from './Couter';

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
    height: 50vh;
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
    <h1 className="title">Vite + React + TypeScriptk</h1>
    <Counter />
    <Stack spacing={1}></Stack>
    <p className="read">hello {text}!!</p>
  </div>
);

export default HelloWorld;
