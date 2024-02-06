import { Select } from './component/Select';
import { TextAreaWithMemory } from './component/TextAreaWithMemory';
import { Caretaker } from './memory/Caretaker';

function debounce(func: () => void, timeout = 500) {
  let timer: number;

  return function (this: HTMLTextAreaElement) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this);
    }, timeout) as unknown as number;
  };
}

function ready() {
  const originator = new TextAreaWithMemory('textarea');
  const caretaker = new Caretaker();
  const textArea = originator.el;
  const mementosList: Select = new Select('select.mementos');
  const previous: HTMLButtonElement =
    document.querySelector('button.previous')!;
  const next: HTMLButtonElement = document.querySelector('button.next')!;

  textArea.addEventListener(
    'input',
    debounce(function (this: HTMLTextAreaElement) {
      caretaker.add(originator.save());
      mementosList.addItem(`${caretaker.getHistoryList().length}`);
      mementosList.setSelectedItem(`${caretaker.getHistoryList().length}`);
    })
  );

  mementosList.addEventListener('change', function () {
    originator.restore(caretaker.get(mementosList.getSelectedIndex()));
  });

  previous.addEventListener('click', function () {
    if (mementosList.getSelectedIndex() > 0) {
      const previousItem = mementosList.getSelectedIndex() - 1;
      originator.restore(caretaker.get(previousItem));
      mementosList.setSelectedIndex(previousItem);
    }
  });

  next.addEventListener('click', function () {
    if (mementosList.getSelectedIndex() < mementosList.getItemCount() - 1) {
      const nextItem = mementosList.getSelectedIndex() + 1;
      originator.restore(caretaker.get(nextItem));
      mementosList.setSelectedIndex(nextItem);
    }
  });
}

document.addEventListener('DOMContentLoaded', ready);
