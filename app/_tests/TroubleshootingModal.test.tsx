import { render, screen, fireEvent } from '@testing-library/react';
import TroubleshootingModal from '@/app/_components/common/TroubleshootingModal';

describe('TroubleshootingModal', () => {
  test('open=true이면 iframe이 보인다', () => {
    render(<TroubleshootingModal open={true} onClose={() => {}} />);

    expect(document.querySelector('iframe')).not.toBeNull();
  });

  test('배경 클릭 시 onClose가 호출된다', () => {
    const onClose = jest.fn();

    render(<TroubleshootingModal open={true} onClose={onClose} />);

    fireEvent.click(screen.getByTestId('overlay'));

    expect(onClose).toHaveBeenCalled();
  });
});
