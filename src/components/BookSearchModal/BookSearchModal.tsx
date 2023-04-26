import React from 'react';
import styled from 'styled-components';

import NonContentModal from '../UI/NonContentModal/NonContentModal';
import BookSearchList from './BookSearchList';
import BookSearchListItem from './BookSearchListItem';

import BOOK_DUMY from './BOOK_DUMY';

interface BookSearchModalProps {
  onClose: () => void;
  showModal: boolean;
}

function BookSearchModal({ onClose, showModal }: BookSearchModalProps) {
  const handleItemClick = () => {
    onClose();
  };

  return (
    <BookSearchModalCard showModal={showModal}>
      <BookSearchList>
        {BOOK_DUMY.map((book) => (
          <BookSearchListItem
            key={book.isbn}
            book={book}
            onClick={handleItemClick}
          />
        ))}
      </BookSearchList>
    </BookSearchModalCard>
  );
}

const BookSearchModalCard = styled(NonContentModal)`
  max-width: 970px;
  max-height: 655px;
  background-color: var(--white);

  && {
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export default BookSearchModal;
