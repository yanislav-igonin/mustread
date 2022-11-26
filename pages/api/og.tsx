import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        h0b0&apos;s mustreads
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
