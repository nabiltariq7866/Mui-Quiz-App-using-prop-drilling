const QuestionHeader = ({ index, question }) => (
    <div className="flex justify-between">
      <p className="text-base font-semibold mb-2">Question-{index + 1}:</p>
      {question}
    </div>
  );
  export default QuestionHeader;