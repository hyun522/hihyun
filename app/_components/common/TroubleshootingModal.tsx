'use client';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TroubleshootingModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      data-testid="overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <iframe src="https://low-baboon.super.site/" />
      </div>
    </div>
  );
}
