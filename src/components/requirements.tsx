import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsFormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<GatherRequirementsFormValues>();

  const onSubmit = (data: GatherRequirementsFormValues) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      router.push('/confirmation');
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`requirement-${index}`} className="mb-4">
          <label htmlFor={`requirement-name-${index}`} className="block mb-2">Requirement Name</label>
          <input
            type="text"
            id={`requirement-name-${index}`}
            {...register(`requirements.${index}.name`)}
            aria-label={`Requirement name ${index + 1}`}
            placeholder={`Requirement name ${index + 1}`}
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor={`requirement-description-${index}`} className="block mt-2 mb-2">Description</label>
          <textarea
            id={`requirement-description-${index}`}
            {...register(`requirements.${index}.description`)}
            aria-label={`Requirement description ${index + 1}`}
            placeholder={`Requirement description ${index + 1}`}
            rows={3}
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor={`requirement-isEssential-${index}`} className="block mt-2 mb-2">Is Essential?</label>
          <input
            type="checkbox"
            id={`requirement-isEssential-${index}`}
            {...register(`requirements.${index}.isEssential`)}
            aria-label={`Requirement essential ${index + 1}`}
          />
        </div>
      ))}
      {formState.isSubmitting || loading ? (
        <button className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50" type="submit" disabled={loading}>
          Submitting...
        </button>
      ) : (
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" type="submit">
          Gather Requirements
        </button>
      )}
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description: string;
  isEssential: boolean;
}

interface GatherRequirementsFormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<GatherRequirementsFormValues>();

  const onSubmit = (data: GatherRequirementsFormValues) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      router.push('/confirmation');
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`requirement-${index}`} className="mb-4">
          <label htmlFor={`requirement-name-${index}`} className="block mb-2">Requirement Name</label>
          <input
            type="text"
            id={`requirement-name-${index}`}
            {...register(`requirements.${index}.name`)}
            aria-label={`Requirement name ${index + 1}`}
            placeholder={`Requirement name ${index + 1}`}
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor={`requirement-description-${index}`} className="block mt-2 mb-2">Description</label>
          <textarea
            id={`requirement-description-${index}`}
            {...register(`requirements.${index}.description`)}
            aria-label={`Requirement description ${index + 1}`}
            placeholder={`Requirement description ${index + 1}`}
            rows={3}
            className="w-full px-3 py-2 border rounded"
          />
          <label htmlFor={`requirement-isEssential-${index}`} className="block mt-2 mb-2">Is Essential?</label>
          <input
            type="checkbox"
            id={`requirement-isEssential-${index}`}
            {...register(`requirements.${index}.isEssential`)}
            aria-label={`Requirement essential ${index + 1}`}
          />
        </div>
      ))}
      {formState.isSubmitting || loading ? (
        <button className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50" type="submit" disabled={loading}>
          Submitting...
        </button>
      ) : (
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" type="submit">
          Gather Requirements
        </button>
      )}
    </form>
  );
};

export default GatherRequirements;