import React from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { api } from '../../../../../services/api';
import { appUrls } from '../../../../../services/urls';
import { useNavigate } from 'react-router-dom';



const SetQuestions = () => {

  const quiz = useSelector(state => state.createQuiz)
  console.log(quiz, "pastor")
  const quizId = quiz?.data?.data?.data?.id

  const navigate = useNavigate()



  const validationSchema = Yup.object({
    questions: Yup.array().of(
      Yup.object({
        question: Yup.string().required('Question is required'),
        options: Yup.array().of(
          Yup.object({
            option: Yup.string().required('Option is required'),
            isCorrect: Yup.boolean(),
          })
        ).min(2, 'At least two options are required')
      })
    ).min(1, 'At least one question is required')
  });

  const submitForm = async (values) => {
    const transformedData = {
      quiz_id: quizId, // Replace with your actual quiz ID
      questions: values.questions.map((q) => ({
        body: q.question,
        options: q.options.map((o) => ({
          body: o.option,
          answer: o.isCorrect,
        }))
      }))
    };

    console.log(transformedData, "transformedData")

    try {
      const response = await api.post(appUrls?.CREATE_QUESTIONS_URL, transformedData);
      console.log('Response:', response);
      toast(`${response?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
      navigate("/quiz/view-quiz")
    } catch (error) {
      console.error('Error submitting data:', error);
      toast("Error", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    }
  };

  return (
    <div className='p-4'>
      <div className='w-full  h-[116px] bg-[#fff] rounded-xl'>
        <div className='xs:p-4 md:p-8'>
          <h2 className='text-xl font-mont_alt text-[#000]'>Set Questions</h2>
          <p className='text-base font-mont_alt text-NEUTRAL-_800'>Set Questions and options field for your quiz.</p>
        </div>
      </div>

      <Formik
        initialValues={{
          questions: [{
            question: '',
            options: [{ option: '', isCorrect: false }]
          }]
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log(JSON.stringify(values, null, 2));
          submitForm(values)
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="questions">
              {({ insert, remove, push }) => (
                <div className='mt-5'>
                  {values.questions.length > 0 && values.questions.map((question, index) => (
                    <div className="mb-4 p-5 bg-[#fff]" key={index}>
                      <div className="mb-2 flex flex-col gap-4">
                        <label htmlFor={`questions.${index}.question`} className="block text-sm font-medium text-gray-700">
                          Question {index + 1}
                        </label>
                        <Field
                          name={`questions.${index}.question`}
                          placeholder="Enter your question"
                          className="mt-1 block w-full outline-[#027315]  shadow-sm sm:text-sm border border-[#666] p-3 rounded-md"
                        />
                      </div>
                      <FieldArray name={`questions.${index}.options`}>
                        {({ insert, remove, push }) => (
                          <div>
                            {question.options.length > 0 && question.options.map((option, optionIndex) => (
                              <div className="mb-2" key={optionIndex}>
                                <div className="flex items-center">
                                  <Field
                                    name={`questions.${index}.options.${optionIndex}.option`}
                                    placeholder="Enter option"
                                    className="mt-1 block w-full outline-[#027315] shadow-sm sm:text-sm border border-[#666] p-3 rounded-md"
                                  />
                                  <Field
                                    type="checkbox"
                                    name={`questions.${index}.options.${optionIndex}.isCorrect`}
                                    className="ml-2"
                                  />
                                  <button
                                    type="button"
                                    className="ml-2 text-[#f00]"
                                    onClick={() => remove(optionIndex)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            ))}
                            <button
                              type="button"
                              className="text-[#027315] font-mont text-sm"
                              onClick={() => push({ option: '', isCorrect: false })}
                            >
                              Add Option
                            </button>
                          </div>
                        )}
                      </FieldArray>
                      <div className=' flex justify-end'>
                        <button
                          type="button"
                          className="mt-2 font-poppins text-[#f00]"
                          onClick={() => remove(index)}
                        >
                          Remove Question
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="text-blue-500"
                    onClick={() => push({ question: '', options: [{ option: '', isCorrect: false }] })}
                  >
                    Add Question
                  </button>
                </div>
              )}
            </FieldArray>
            <div className='flex gap-4 justify-end'>
              <button type="submit" className="mt-4 bg-[#027315] w-[181px] h-[52px] font-mont_alt flex items-center justify-center text-[#fff] py-2 px-4 rounded-lg">
                Submit
              </button>
              <button type="button" className="mt-4 border border-[#027315] font-mont_alt w-[181px] h-[52px] flex items-center justify-center text-[#027315] py-2 px-4 rounded-lg">
                Cancel
              </button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SetQuestions;
