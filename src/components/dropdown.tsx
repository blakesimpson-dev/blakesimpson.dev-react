import {useState} from 'react';
import type {ReactNode} from 'react';
import {FaCaretDown, FaCaretUp, FaCheck} from 'react-icons/fa';
import '../styles/dropdown.scss';

export interface DropdownItem<Id> {
  id: Id;
  name: string;
}

interface DropdownProps<Id> {
  headerContent: ReactNode;
  items: ReadonlyArray<DropdownItem<Id>>;
  selectedId: Id;
  onSelect: (id: Id) => void;
}

/** A Windows 95 style menu: a header button that opens a checked list. */
export function Dropdown<Id extends string | number>({
  headerContent,
  items,
  selectedId,
  onSelect,
}: DropdownProps<Id>) {
  const [isOpen, setIsOpen] = useState(false);

  function selectItem(id: Id) {
    setIsOpen(false);
    onSelect(id);
  }

  return (
    <div className="dropdown-wrapper">
      <button
        type="button"
        className="dropdown-header"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="dropdown-header--content">{headerContent}</div>
        {isOpen ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
      </button>
      {isOpen && (
        <div role="list" className="dropdown-list">
          {items.map(item => (
            <button
              type="button"
              className="dropdown-list-item"
              key={item.id}
              onClick={() => {
                selectItem(item.id);
              }}
            >
              <div className="dropdown-list-item--content">{item.name}</div>
              {item.id === selectedId && <FaCheck size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
