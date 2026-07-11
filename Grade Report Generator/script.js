
const PASSING_SCORE = 60;

const GRADE_FEEDBACK = {
    'A': 'Excellent work',
    'B': 'Great job',
    'C': 'You passed',
    'D': 'You passed',
    'F': 'Keep practicing'
};

/**
 * Determines the letter grade based on a numeric score.
 * @param {number} score 
 * @returns {string} 'A' | 'B' | 'C' | 'D' | 'F'
 */
function getLetterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B'; 
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';

    return 'F';
}

/**
 * Returns a short feedback message based on the letter grade.
 * @param {string} grade 
 * @returns {string}
 */
function getFeedback(grade) {
    return GRADE_FEEDBACK[grade] || 'No feedback available';
}

/**
 * 
 * @param {number} score 
 * @returns {boolean}
 */
function hasPassed(score) {
    return score >= PASSING_SCORE;
}

/**
 * 
 * @param {string} name 
 * @param {number} score 
 * @returns {Object}
 * @throws {TypeError | RangeError}
 */
function createGradeReport(name, score) {

    if (typeof score !== 'number' || typeof name !== 'string') {
        throw new TypeError("Enter valid datatype");    
    }

    if (score < 0 || score > 100) {
        throw new RangeError("Score must be between 0 and 100");
    }

    const grade = getLetterGrade(score);

    return {
        name,
        score,
        grade, 
        passed : hasPassed(score),
        feedback : getFeedback(grade),
    }
}

// run 
console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
