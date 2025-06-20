import React, { useState } from "react";
import styles from "./Register.module.css";
import { useAuth } from "../../components/context/AuthContext";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    photoUrl: "",
  });
  const { register } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form.name, form.surname, form.email, form.password, form.photoUrl);
  };

  return (
    <div className={styles.Register}>
      <div className={styles.profile}>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="surname"
            name="surname"
            placeholder="SurName"
            value={form.surname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="photoUrl"
            name="photoUrl"
            placeholder="photoUrl"
            value={form.photoUrl}
            onChange={handleChange}
          />
          <button type="sumbit">create account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
