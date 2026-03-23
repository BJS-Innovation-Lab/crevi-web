import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 9.5A2.5 2.5 0 0 1 5.5 7H10l1.5-2h3L16 7h2.5A2.5 2.5 0 0 1 21 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5z" />
      <circle cx="12" cy="13" r="3.25" />
    </BaseIcon>
  );
}

export function AccessIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <path d="M8 8h8M8 12h5M8 16h3" />
      <circle cx="17" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function FireIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3c1.8 2.1 3.6 4.5 3.6 7.1A3.6 3.6 0 0 1 12 13.7a3.6 3.6 0 0 1-3.6-3.6C8.4 7.5 10.2 5.1 12 3Z" />
      <path d="M8 14.4c-1.6 1.2-2.5 2.8-2.5 4.6A6.5 6.5 0 0 0 12 25.5 6.5 6.5 0 0 0 18.5 19c0-1.8-.9-3.4-2.5-4.6" transform="translate(0 -4)" />
    </BaseIcon>
  );
}

export function RadioIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="6" y="5" width="12" height="15" rx="2.5" />
      <path d="M9 2h6M12 8v5M9.5 11.5h5" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4v4M6 10h12M7 20v-4m10 4v-4" />
      <rect x="9" y="8" width="6" height="6" rx="1.5" />
      <rect x="3" y="16" width="8" height="4" rx="1.5" />
      <rect x="13" y="16" width="8" height="4" rx="1.5" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 3.2v5.5c0 4.4-2.8 8.4-7 10.3-4.2-1.9-7-5.9-7-10.3V6.2z" />
      <path d="M9.5 12.2l1.7 1.8 3.5-4" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.5 4.5h3l1.2 4.1-1.8 1.8a15.5 15.5 0 0 0 3.7 3.7l1.8-1.8 4.1 1.2v3a1.8 1.8 0 0 1-2 1.8A15.8 15.8 0 0 1 5.7 6.5a1.8 1.8 0 0 1 1.8-2Z" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </BaseIcon>
  );
}
