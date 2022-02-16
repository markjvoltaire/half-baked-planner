import { useEntries } from '../../context/PlannerContext';
import Entry from './EntryItem';
import styles from './EntryList.css';

export default function EntriesList() {
  // TODO: Replace with the entries stored in PlannerContext
  const { entries } = useEntries();
  console.log('entries from entryList', entries);
  // const entries = [
  //   {
  //     id: 0,
  //     title: 'Replace me!',
  //     content: '`content` should only be visible on the detail view',
  //     date: new Date(),
  //   },
  // ];

  return (
    <ul className={styles.list}>
      {entries.map(({ id, title, date }) => (
        <Entry key={id} id={id} title={title} date={date} />
      ))}
    </ul>
  );
}
