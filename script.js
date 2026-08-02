import javax.swing.*;
import java.awt.*;

public class AppJanela extends JFrame {
    public AppJanela() {
        setTitle("Exemplo de Topo em Java");
        setSize(400, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        
        JPanel painelConteudo = new JPanel();
        painelConteudo.setLayout(new BoxLayout(painelConteudo, BoxLayout.Y_AXIS));
        for (int i = 1; i <= 50; i++) {
            painelConteudo.add(new JLabel("Linha de Conteúdo " + i));
            painelConteudo.add(Box.createVerticalStrut(15)); 
        }

      
        JScrollPane scrollPane = new JScrollPane(painelConteudo);
        add(scrollPane, BorderLayout.CENTER);

        
        JButton btnTopo = new JButton("↑ Voltar ao Topo");
        add(btnTopo, BorderLayout.SOUTH);

    
        btnTopo.addActionListener(e -> {
            JScrollBar barraVertical = scrollPane.getVerticalScrollBar();
            
            
            Timer animacao = new Timer(10, null);
            animacao.addActionListener(event -> {
                int posicaoAtual = barraVertical.getValue();
                if (posicaoAtual > 0) {
                 
                    barraVertical.setValue(posicaoAtual - 15); 
                } else {
                    animacao.stop(); 
                }
            });
            animacao.start();
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new AppJanela().setVisible(true));
    }
}
