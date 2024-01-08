import { ActionIcon } from '@mantine/core';

export default function Home() {
  return (
    <section className="">
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: 'blue', to: 'violet', deg: 90 }}
      >
        love
      </ActionIcon>
    </section>
  );
}
