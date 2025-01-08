
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * 11/01/2020
 * Objective: Create a trivia game where two players take turns answering 
 * five questions that the compiler reads from a text file. For each correct answer, 
 * the program will keep a tally of points each & display the winner at the end. 
 */

public class TriviaGame {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)  throws FileNotFoundException {
        // Scanner to read file input

        ArrayList<Question> questions = new ArrayList<>();
        Question q = new Question();
        int playerOnePoints = 0;
        int playerTwoPoints = 0;
        // Scanner to scan keyboard input
        Scanner scan = new Scanner(System.in);

        //Finds the file & creates object instances of each question and pass them into an ArrayList
        File file = new File("src/QUESTIONS.TXT");

        try {

            Scanner sc = new Scanner(file);
            // while loop until file has line
            while (sc.hasNextLine()) {
                // read the line
                String question = sc.nextLine();
                String firstAnswer = sc.nextLine();
                String secondAnswer = sc.nextLine();
                String thirdAnswer = sc.nextLine();
                String fourthAnswer = sc.nextLine();
                String correctAnswer = sc.nextLine();

                q = new Question(question, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer);

                questions.add(q);
            }
            sc.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        /**
         * This for loop alternates questions to each player. It let's the players
         * know if they guessed correctly or not and track their points.
         */
        for (int i = 0; i < questions.size(); i++) {
            // Assign every other question to player one
            if (i % 2 == 0)
            {
                System.out.println("Player One, please answer the following" + " question:\n");
                System.out.println(questions.get(i).toString());
                String answer = scan.next();
                if (answer.equalsIgnoreCase(questions.get(i).getCorrectAnswer()))
                {
                    playerOnePoints++;
                    System.out.println("You got it right! You have " + playerOnePoints + " point(s).\n");
                }
                else
                    System.out.println("Sorry, that was incorrect! You have " + playerOnePoints + " point(s). the correct asnwer is " + questions.get(i).getCorrectAnswer() + "\n");

            } else  { // Assign every other question to player two
                System.out.println("Player Two, please answer the following" + " question:\n");
                System.out.println(questions.get(i).toString());
                String answer = scan.next();
                if (answer.equalsIgnoreCase(questions.get(i).getCorrectAnswer())) {
                    playerTwoPoints++;
                    System.out.println("You got it right! You have " + playerTwoPoints + " point(s).\n");
                } else {
                    System.out.println("Sorry, that was incorrect! You have " + playerTwoPoints + " point(s).\n");

                }
            }
        }

        // Decide who wins
        if (playerOnePoints > playerTwoPoints) {
            System.out.print("Player one wins!");
        } else {
            System.out.print("Player two wins!");
        }
    }

}