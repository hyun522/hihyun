import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTopButton from '@/app/_components/common/ScrollToTopButton';

describe('ScrollToTopButton', () => {
  test('버튼 클릭 시 window.scrollTo가 호출된다', () => {
    window.scrollTo = jest.fn();

    render(<ScrollToTopButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
