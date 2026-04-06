import { TheoryAccordionItem } from '../components/TheoryAccordionItem';

export function TheoryAccordionSection({ items, openId, onToggle }) {
  return (
    <div className="theory-content-grid grid gap-3 sm:gap-4">
      {items.map((item, index) => (
        <TheoryAccordionItem
          key={item.id}
          item={item}
          index={index}
          isOpen={openId === item.id}
          onToggle={() => onToggle(item.id)}
        />
      ))}
    </div>
  );
}
