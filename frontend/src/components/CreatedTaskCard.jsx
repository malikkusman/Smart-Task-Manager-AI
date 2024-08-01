import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from './Loader';

const priorities = ['LOW', 'MEDIUM', 'HIGH'];

const CreatedTaskCard = ({ task, setCreated, setRefetching }) => {
  const [priority, setPriority] = useState(task.priority);
  const [isSaving, setIsSaving] = useState(false);
  const [notes, setNotes] = useState(task.notes);
  const [error, setError] = useState(null);

  const handleSaveTask = async () => {
    try {
      setIsSaving(true);
      await axios.post('/tasks', {
        ...task,
        notes,
        priority,
      });
      setIsSaving(false);
      setCreated(false);
      setRefetching((prev) => !prev);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while saving the task.');
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen p-2 bg-[rgba(26,25,25,0.95)] grid place-items-center z-[99] overflow-y-auto custom-scrollbar">
      <div className="w-full max-w-[600px] p-4 border border-hovery rounded-lg backdrop-blur-xl bg-[rgba(0,0,0,0.2)] cursor-default">
        <div className="flex gap-2 pb-2 border-b border-custom_01">
          {task.tags.map((tag) => (
            <span key={tag} className="bg-hovery border border-custom_01 px-2 rounded-[100px]">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="my-4 font-poppins text-large font-[400] capitalize">{task.title}</h1>
        <p className="text-secondary">Description</p>
        <p className="ml-4 mb-4 text-tertiary">- {task.description}</p>
        <p className="text-text mb-2">Priority</p>
        <div className="mb-4 flex items-center gap-2">
          {priorities.map((p) => (
            <button
              key={p}
              onClick={() => setPriority(p)}
              className={`uppercase py-[2px] px-2 rounded-[100px] text-tiny max-w-max ${
                p.toUpperCase() === 'LOW'
                  ? 'bg-orange'
                  : p.toUpperCase() === 'MEDIUM'
                  ? 'bg-green'
                  : 'bg-red'
              } ${p === priority ? 'opacity-100' : 'opacity-30'}`}
            >
              {p}
            </button>
          ))}
        </div>
        <p className="text-text mb-2">Category</p>
        <p className="mb-4 py-[2px] px-2 border border-custom_01 bg-hovery rounded-[100px] max-w-max">
          {task.category}
        </p>
        <p className="text-medium my-2 text-secondary">Notes</p>
        <textarea
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-[80px] p-2 pl-4 mb-4 border border-blue bg-hovery backdrop-blur-lg rounded-lg resize-none outline-none placeholder:text-text placeholder:opacity-60 custom-scrollbar"
          placeholder="Type Notes For The Task..."
        />
        {error && <p className="mt-2 text-red">* {error}</p>}
        <div className="w-full flex items-center justify-end gap-2 mt-4">
          <button
            className="py-1 px-4 border border-tertiary rounded-[100px] hover:bg-tertiary transition-all select-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSaving}
            onClick={() => setCreated(false)}
          >
            Cancel
          </button>
          <button
            className="py-1 px-4 bg-brand text-background dark:text-text rounded-[100px] hover:bg-custom_02 transition-all select-none flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSaving}
            onClick={handleSaveTask}
          >
            {isSaving && <Loader />}
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

CreatedTaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    category: PropTypes.string,
    notes: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setCreated: PropTypes.func.isRequired,
  setRefetching: PropTypes.func.isRequired,
};

export default CreatedTaskCard;
