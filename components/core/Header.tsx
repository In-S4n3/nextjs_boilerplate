'use client';
import { Burger, Button, Drawer, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { CTA } from '../CTA';

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <header className="bg-gray-900 py-10">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-8">
        <Link href="/" className="text-white">
          <h1 className="text-base">BOILERPLATE</h1>
        </Link>
        <Group visibleFrom="xs">
          <Link href="/login">
            <CTA>Login</CTA>
          </Link>
        </Group>
        <Burger
          opened={opened}
          onClick={open}
          hiddenFrom="xs"
          size="sm"
          color="white"
        />
      </nav>
      <Drawer
        opened={opened}
        onClose={close}
        hiddenFrom="xs"
        size="300px"
        title="BOILERPLATE"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Link href="/login">
          <CTA>Login</CTA>
        </Link>
      </Drawer>
    </header>
  );
}
