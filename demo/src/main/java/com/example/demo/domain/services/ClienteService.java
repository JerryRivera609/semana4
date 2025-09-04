package com.example.demo.domain.services;

import com.example.demo.domain.models.Cliente;

import java.util.List;

public interface ClienteService {

    List<Cliente> listarClientes();

    void guardarCliente(Cliente cliente);

    void editarCliente(Cliente cliente);

    void eliminarCliente(Long id);

}
