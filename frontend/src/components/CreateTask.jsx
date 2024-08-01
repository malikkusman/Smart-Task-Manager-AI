import { useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Loader from "./Loader";

const CreateTask = ({ styles, setCreatedTask, setCreated }) => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('/gpt', { title: prompt });
      const task = JSON.parse(response.data.task);
      setCreatedTask(task);
      setPrompt('');
      setCreated(true);
    } catch (error) {
      console.error(error);
      setError('An error occurred while creating the task.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`${styles}`}>
      <form
        className="border border-brand rounded-[100px] backdrop-blur-md flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your task..."
          className="py-1 pl-4 bg-background w-full rounded-l-[100px] outline-none caret-brand placeholder:text-text placeholder:opacity-60"
        />
        <button
          className="py-1 px-4 rounded-[100px] bg-brand hover:bg-custom_02 transition-all disabled:cursor-not-allowed flex items-center gap-2"
          type="submit"
          disabled={
            prompt.trim().length < 3 || loading
          }
        >
          {loading && <Loader />}
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
      {error && <p className="text-red mt-2">{error}</p>}
    </div>
  );
}

CreateTask.propTypes = {
  styles: PropTypes.string,
  setCreatedTask: PropTypes.func.isRequired,
  setCreated: PropTypes.func.isRequired,
};

export default CreateTask;
