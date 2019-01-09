INSERT INTO db_user (id, email, name, password) VALUES
  (1, 'test@mail.com', 'TestName', 'TestPassword'),
  (2, 'test2@mail.com', 'TestName2', 'TestPassword2'),
  (3, 'igor.kuzevanov@seznam.cz', 'Igor Kuzevanov', 'igor.kuzevanov@seznam.cz');
INSERT INTO dashboard (id, user_id) VALUES
  (1,3);


INSERT INTO db_window (id, dashboard_id) VALUES
  (1,1);

INSERT INTO note (id, text, archived, window_id) VALUES
  (1, 'Welcome to the best project of B4B36SIN 2018/2019', false, 1);