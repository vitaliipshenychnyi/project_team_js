import { Notify } from 'notiflix';

const notifyConfig = {
  timeout: 3000,
  className: 'notify-styles',
  fontSize: '14px',
  width: '290px',
};

export async function notifyDeletedBook() {
  Notify.info(
    `The book has been successfully removed from the list`,
    notifyConfig
  );
}

export async function notifyAddedBook(title) {
  Notify.info(
    `The book ${title} has been successfully added from the list`,
    notifyConfig
  );
}

export async function emptyShoppingList() {
  Notify.info(`Your shopping list empty`, notifyConfig);
}

export async function notifyErrorDatabase(e) {
  Notify.failure(`${e}`, notifyConfig);
}
