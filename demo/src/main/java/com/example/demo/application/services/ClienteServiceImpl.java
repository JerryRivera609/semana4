package com.example.demo.application.services;

import com.example.demo.domain.models.Cliente;
import com.example.demo.domain.repository.ClienteRepository;
import com.example.demo.domain.services.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository clienteRepository;

    @Override
    public List<Cliente> listarClientes() {
        return clienteRepository.listarClientes();
    }

    @Override
    public void guardarCliente(Cliente cliente) {
        clienteRepository.guardarCliente(cliente);
    }

    @Override
    public void editarCliente(Cliente cliente) {
        clienteRepository.editarCliente(cliente);
    }

    @Override
    public void eliminarCliente(Long id) {
        clienteRepository.eliminarCliente(id);
    }
}
