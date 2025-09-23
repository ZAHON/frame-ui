import { Test } from '@/test';
import '@/index.css';

export default () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frame UI Qwik</title>
      </head>
      <body>
        <Test />
      </body>
    </>
  );
};
