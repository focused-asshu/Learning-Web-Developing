
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.HashSet;

public class GamePanel extends JPanel implements KeyListener {
    private final int TILE_SIZE = 64;
    private final int WIDTH = 10;
    private final int HEIGHT = 8;
    private int playerX = 0, playerY = 0;

    private HashSet<String> inventory = new HashSet<>();
    private String[][] world = {
        {"G", "G", "W", "G", "T", "G", "S", "G", "G", "G"},
        {"G", "G", "G", "G", "G", "G", "G", "G", "G", "G"},
        {"G", "G", "E", "G", "M", "G", "G", "G", "G", "G"},
        {"G", "G", "G", "G", "G", "G", "G", "G", "G", "G"},
        {"G", "G", "G", "G", "G", "G", "G", "G", "G", "G"},
        {"G", "G", "G", "G", "G", "G", "G", "G", "G", "G"},
        {"G", "G", "G", "G", "G", "G", "G", "G", "G", "G"},
        {"G", "G", "G", "G", "G", "G", "G", "G", "G", "G"}
    };

    public GamePanel() {
        setPreferredSize(new Dimension(WIDTH * TILE_SIZE, HEIGHT * TILE_SIZE));
        setFocusable(true);
        addKeyListener(this);
    }

    public void startGame() {
        repaint();
    }

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        drawWorld(g);
        g.setColor(Color.BLUE);
        g.fillRect(playerX * TILE_SIZE, playerY * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        drawInventory(g);
    }

    private void drawWorld(Graphics g) {
        for (int y = 0; y < HEIGHT; y++) {
            for (int x = 0; x < WIDTH; x++) {
                g.setColor(Color.GREEN);
                g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                switch (world[y][x]) {
                    case "W":
                        g.setColor(Color.YELLOW); // wheat
                        g.fillRect(x * TILE_SIZE + 20, y * TILE_SIZE + 20, 24, 24);
                        break;
                    case "S":
                        g.setColor(Color.WHITE); // sugar
                        g.fillOval(x * TILE_SIZE + 20, y * TILE_SIZE + 20, 24, 24);
                        break;
                    case "E":
                        g.setColor(Color.ORANGE); // egg
                        g.fillOval(x * TILE_SIZE + 22, y * TILE_SIZE + 22, 20, 20);
                        break;
                    case "M":
                        g.setColor(Color.CYAN); // milk
                        g.fillRect(x * TILE_SIZE + 18, y * TILE_SIZE + 18, 28, 28);
                        break;
                    case "T":
                        g.setColor(Color.DARK_GRAY); // tree
                        g.fillRect(x * TILE_SIZE + 16, y * TILE_SIZE + 16, 32, 32);
                        break;
                }
            }
        }
    }

    private void drawInventory(Graphics g) {
        g.setColor(Color.BLACK);
        g.drawString("Inventory: " + inventory, 10, HEIGHT * TILE_SIZE - 10);
        if (inventory.contains("W") && inventory.contains("S") && inventory.contains("E") && inventory.contains("M")) {
            g.drawString("Press C to craft cake!", 10, HEIGHT * TILE_SIZE - 30);
        }
    }

    @Override
    public void keyPressed(KeyEvent e) {
        int key = e.getKeyCode();
        int newX = playerX;
        int newY = playerY;
        if (key == KeyEvent.VK_LEFT) newX--;
        if (key == KeyEvent.VK_RIGHT) newX++;
        if (key == KeyEvent.VK_UP) newY--;
        if (key == KeyEvent.VK_DOWN) newY++;
        if (key == KeyEvent.VK_C && inventory.contains("W") && inventory.contains("S") && inventory.contains("E") && inventory.contains("M")) {
            try {
                Desktop.getDesktop().browse(new File("bday.html").toURI());
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }

        if (newX >= 0 && newX < WIDTH && newY >= 0 && newY < HEIGHT) {
            playerX = newX;
            playerY = newY;
            String tile = world[playerY][playerX];
            if ("WSEM".contains(tile)) {
                inventory.add(tile);
                world[playerY][playerX] = "G"; // replace with grass
            }
        }
        repaint();
    }

    @Override public void keyReleased(KeyEvent e) {}
    @Override public void keyTyped(KeyEvent e) {}
}
