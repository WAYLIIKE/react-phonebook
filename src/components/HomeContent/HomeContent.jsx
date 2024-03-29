import css from './HomeContent.module.css';

export const HomeContent = () => {
  return (
    <div className={css.container}>
      <h1>Welcome to Contacts Web Application</h1>
      <p>Manage your contacts</p>
    </div>
  );
};
