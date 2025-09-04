package com.example.demo.infraestructure.repository;

import com.example.demo.domain.models.Cliente;
import com.example.demo.domain.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ClienteRepositoryImpl implements ClienteRepository {

    private final JdbcTemplate jdbcTemplate;

    private static final String URL = "jdbc:postgresql://localhost:5432/consulta-clientes";
    private static final String USER = "postgres";
    private static final String PASSWORD = "root";


    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    @Override
    public List<Cliente> listarClientes() {
        List<Cliente> clientes = new ArrayList<>();
        String sql = "SELECT id, nombre, correo, telefono FROM cliente";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Cliente cliente = new Cliente();
                cliente.setId(rs.getLong("id"));
                cliente.setNombre(rs.getString("nombre"));
                cliente.setCorreo(rs.getString("correo"));
                cliente.setTelefono(rs.getString("telefono"));
                clientes.add(cliente);
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }

        return clientes;
    }

    @Override
    public void guardarCliente(Cliente cliente) {
        String sql = "INSERT INTO cliente (nombre, correo, telefono) VALUES (?, ?, ?)";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, cliente.getNombre());
            ps.setString(2, cliente.getCorreo());
            ps.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void editarCliente(Cliente cliente) {
        String sql = "UPDATE cliente SET nombre = ?, correo = ?, telefono = ? WHERE id = ?";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, cliente.getNombre());
            ps.setString(2, cliente.getCorreo());
            ps.setLong(3, cliente.getId());
            ps.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void eliminarCliente(Long id) {
        String sql = "DELETE FROM cliente WHERE id = ?";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setLong(1, id);
            ps.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
