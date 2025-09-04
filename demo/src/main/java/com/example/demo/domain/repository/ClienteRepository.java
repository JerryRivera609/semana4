package com.example.demo.domain.repository;

import com.example.demo.domain.models.Cliente;

import java.util.List;

public interface ClienteRepository {

    List<Cliente> listarClientes();

    void guardarCliente(Cliente cliente);

    void editarCliente(Cliente cliente);

    void eliminarCliente(Long id);

}
